import { Button, Dialog } from "@material-tailwind/react";
import { Fragment, useState } from "react";
// import type { DialogProps, DialogHeaderProps, DialogBodyProps, DialogFooterProps } from "@material-tailwind/react";

const LoginModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((open) => !open);
    return (
        <Fragment>
            <Button onClick={handleOpen}>Sign In</Button>
            <Dialog 
            size="xs"
            open={open}
            handler={handleOpen}
            >

            </Dialog>
        </Fragment>
    );
}

export default LoginModal;