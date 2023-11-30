import { useEffect, useState } from 'react'
import SectionComponent from '../components/section-component/section'
import { API } from '../api/api';

const KanbanPage = () => {

        const [groupBy, setGroupBy] = useState('status'); 
        const [orderBy, setOrderBy] = useState('title'); 
        const [tickets, setTickets] = useState([]);
        const [users, setUsers] = useState([])
        const [sections, setSections] = useState([]);

        const handleGroupByChange = (event) => {
            setGroupBy(event.target.value);
        }
        
        const handleOrderByChange = (event) => {
            setOrderBy(event.target.value);
        }
        
        const toggleDropdown = () => {
            const dropdown = document.getElementById('myDropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }

        const fetchData = async () => {    
            try {
              const response = await API.getData()
              console.log(response)
              const tickets_list = updateTickets(response.data.tickets, response.data.users)
              setTickets(tickets_list)
              setUsers(response.data.users)
              groupAndSortList(tickets_list,groupBy,orderBy)
            } catch (error) {
              console.log(error)
            } 
        }
        const updateTickets = (tickets, users) => {
            return tickets.map(ticket => {
                const user = users.find(user => user.id === ticket.userId);
                if (user) {
                    return {
                        ...ticket,
                        user: user.name,
                        available: user.available
                    };
                } else {
                    return ticket;
                }
            });
        }

        const groupAndSortList = (list, groupByKey, orderByKey) => {
            // Group the list by the specified key
            const groupedObject = list.reduce((acc, item) => {
                (acc[item[groupByKey]] = acc[item[groupByKey]] || []).push(item);
              return acc
            }, {})
            
            // Create an array of objects with group name and ordered list
            const result = Object.entries(groupedObject).map(([groupName, groupList]) => ({
              name: groupName,
              type: groupByKey,
              tickets: groupList.sort((a, b) => a[orderByKey] - b[orderByKey]),
            }))
            console.log(result)
            setSections(result)
        }

        const getAvailablity = (type, userName) => {
            if(type!='user') return false
            const user = users.find(user => user.name === userName)
            return user.available
        }

        useEffect(() => {
            fetchData()
          }, [])

        useEffect(() => {
            groupAndSortList(tickets,groupBy,orderBy)
        }, [groupBy,orderBy])
        

        return (
            <div>
                <div className="navbar">
                    <button className="dropdown-btn button" onClick={toggleDropdown}>
                        Display
                    </button>
                </div>
                <div className="dropdown" id="myDropdown">
                    <div>
                    <label htmlFor="groupBy">Group By:</label>
                    <select id="groupBy" value={groupBy} onChange={handleGroupByChange}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="orderBy">Order By:</label>
                    <select id="orderBy" value={orderBy} onChange={handleOrderByChange}>
                        <option value="title">Title</option>
                        <option value="priority">Priority</option>
                    </select>
                    </div>
                </div>
               <div className='sectionsList'>
                    {sections.map((content) => (
                        <SectionComponent key={content.name} name={content.name} type={content.type} tickets={content.tickets} available={getAvailablity(content.type,content.name)} />
                    ))}

               </div>
            </div>
        )
    }
    
export default KanbanPage
