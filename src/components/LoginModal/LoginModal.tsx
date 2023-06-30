import { Button, Card, CardBody, CardFooter, Dialog, DialogHeader, Typography, Input, IconButton } from "@material-tailwind/react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Fragment, useState } from "react";


const LoginModal = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((open) => !open);
    const handleSubmit = () => null;

    return (
        <Fragment>
            <Button onClick={handleOpen}>Sign In</Button>
            <Dialog 
                size="xs"
                open={open}
                handler={handleOpen}
            >
                <DialogHeader className="grid place-items-center">
                    <Typography variant="h3" color="gray">
                        Sign In
                    </Typography>
                </DialogHeader>
                <Card>
                    <form onSubmit={handleSubmit}>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg"/>
                        <Input 
                            label="Password" 
                            size="lg"
                            type={showPassword ? 'text' : 'password'}
                            icon={
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={()=> setShowPassword(!showPassword)}
                                >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            }
                            
                        />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button onClick={handleOpen} className="w-3/4" type="submit">
                            Sign In
                        </Button>
                        <Typography
                            variant="small"
                            className="mt-6 flex justify-center"    
                            >
                            Don't have an account?
                            <Typography 
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold hover:cursor-pointer"
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