import TitleBar from "./TitleBar";
import MenuBar from "./MenuBar";
import SideBar from "./SideBar";
import ProjectGrid from "./ProjectGrid";
import Form from "./form";

function ContactForm({ title, categories }){
    return(
        <div className="window">
            <TitleBar title={"Send Message to Talal Munir"} />
            <MenuBar />
            <div className="window-content">
                <SideBar title={title} categories={categories} />
                <Form />
            </div>
        </div>
    );
}

export default ContactForm;