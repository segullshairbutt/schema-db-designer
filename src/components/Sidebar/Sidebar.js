import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Button from '../Button/Button';
import './Sidebar.css';

const Sidebar = (props) => {
    
    return (
        <Accordion className="sidenav" allowMultipleExpanded="true" allowZeroExpanded="true" style={{ width: props.status ? 250 : 0 }}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordion-button">
                        Projects
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Schema Name: <span>Untitled</span></p>
                    <p>Database: <span className="properties-db-lable"> generic</span></p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordion-button">
                        History
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="show-edit-history">
                    <p></p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordion-button">
                        Comments
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="comment-header">
                        <textarea rows="5" className="new-comment-content" placeholder="Enter your comment here"></textarea>
                        <Button text={'Send'} />
                    </div>

                    <div className="new-comment"></div>

                    <div className="comment-footer" style={{ textAlign: 'center' }}>
                        <Button text={'Refresh Comment List'} icon={<span>&#128472;</span>} />
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default Sidebar;