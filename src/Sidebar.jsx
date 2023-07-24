import React from "react";
import { Button, IconButton } from "@material-ui/core";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import AccesTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title={"Inbox"}
        number={50}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title={"Starred"} number={5} />
      <SidebarOptions Icon={AccesTimeIcon} title={"Snoozed"} number={5} />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title={"Important"}
        number={5}
      />
      <SidebarOptions Icon={NearMeIcon} title={"Sent"} number={5} />
      <SidebarOptions Icon={NoteIcon} title={"Drafts"} number={5} />
      <SidebarOptions Icon={ExpandMoreIcon} title={"More"} number={5} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
