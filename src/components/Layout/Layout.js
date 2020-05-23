import React from 'react';


const layout = (props) => (
    <React.fragment>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </React.fragment>

);

export default layout
