import React, {useEffect, useState}  from 'react'; /*  must always do this line when using use states in the code */
import './Sidebar.css';
import db from './firebase';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import { collection, onSnapshot } from 'firebase/firestore';




function Sidebar(){
    const [channels, setChannels] = useState([]) /*  simple use state variable */
    // run this code when the sidebar loads or in other words when the page opens this loads aswell
    useEffect(() => {
        onSnapshot(collection(db, 'rooms'), ( snapshot) => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id, /* so after getting access to the room now with access to the doc. and this "id:doc.id" now gives access to the id of each document that is in there*/
                    name: doc.data().name /*  after all of that. now you get the data like the names, timestampes etc. */
                }))
            ) /* this goes through all of the documents via snapshots */
        )) /* db.collection is going into the database and then saying hey give me "rooms" or whatever the name of the collection is.  and then the snapshot part is like taking a picture of what the database looks like , and whenever it changes a new snapshot is given*/
        
    } ,[])

    return(

        <div className="sideBar">
            <div className="sideBarHeader">
                <div className="sideBarInfo">
                     <h2> move if your gay </h2>
                  <h3> 
                    <FiberManualRecordIcon/> 
                    sigma 
                 </h3>
             </div>

            <div className="create">
                 <CreateIcon/> 
             </div>

            </div>
            <SidebarOption Icon={InsertCommentIcon} title ="Chats"/>
            <SidebarOption Icon={InboxIcon} title ="Mentions & Reactions"/>
            <SidebarOption Icon={DraftsIcon} title ="Saved Items"/>
            <SidebarOption Icon={BookmarkIcon} title =" Channel Browser"/>
            <SidebarOption Icon={PeopleAltIcon} title =" People & user groups"/>
            <SidebarOption Icon={AppsIcon} title =" Apps"/>
            <SidebarOption Icon={FileCopyIcon} title =" File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title =" Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title = "Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} title = "Add Channel"/>

            {/* connect to db and list all the channels  */}
            {/* <SidebarOption ... /> */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel}/> /* this connects to the db using the useEffect , and because of the snapshot updating the data this line of code here is what is rendering that data */
            ))} 
             </div>
    )
    
}

export default Sidebar