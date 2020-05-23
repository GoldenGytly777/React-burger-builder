import React, {Fragment} from 'react';
import style from './Layout.module.css';

const layout = (props) => (
    <Fragment>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className={style.Content}>
            {props.children}
        </main>
    </Fragment>

);

export default layout;
