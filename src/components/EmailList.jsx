import React from 'react';
import '../CSS/EmailList.css'
import { Checkbox, IconButton } from '@mui/material';
import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings } from '@mui/icons-material';

const EmailList = () => {
    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <Redo/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default EmailList;
