import { Button, Card, CardBody, CardFooter, Dialog, DialogHeader, Typography, Input } from "@material-tailwind/react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Fragment, useState } from "react";


const LoginModal = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((open) => !open);
    const handleSubmit = () => null;

    return (
        <Fragment>
            <Button onClick={handleOpen} className="focus:outline-none" ripple={false}>Sign In</Button>
            <Dialog 
                size="xs"
                open={open}
                handler={handleOpen}
                className="focus:outline-none"
            >
                <DialogHeader className="grid place-items-center p-6 pb-0">
                    <Typography variant="h3" color="gray">
                        Sign In
                    </Typography>
                </DialogHeader>
                <Card>
                    <form onSubmit={handleSubmit}>
                    <CardBody className="flex flex-col gap-5 p-6">
                        <Input label="Email" size="lg"/>
                        <Input 
                            label="Password" 
                            size="lg"
                            type={showPassword ? 'text' : 'password'}
                            className="flex justify-end items-start"
                            icon={
                                <i
                                    className="hover:cursor-pointer"
                                    aria-label="toggle password visibility"
                                    color="gray"
                                    onClick={()=> setShowPassword(!showPassword)}
                                >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                                </i>
                            }
                            
                        />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <div className="flex justify-center">
                            <Button onClick={handleOpen} className="w-3/4 focus:outline-none flex justify-center" type="submit" ripple={false}>
                                Sign In
                            </Button>
                        </div>
                        <Typography
                            variant="small"
                            className="mt-6 flex justify-center"    
                            >
                            Don't have an account?
                            <Typography 
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold hover:cursor-pointer hover:text-sky-700"
                                onClick={handleOpen}
                                >
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </Fragment>
    );
}

export default LoginModal;