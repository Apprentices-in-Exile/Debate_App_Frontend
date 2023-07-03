import { List, ListItem } from '@material-tailwind/react';
export function NavBar() {
  return (
    <List className='text-white flex w-1/4 justify-center align-center h-full text-xl bg-clip-padding bg-info backdrop-filter backdrop-blur-xl bg-opacity-10'>
      <ListItem
        className='text-info rounded-none hover:bg-info/50 focus:bg-sky-500/90'
        selected={false}
      >
        Home
      </ListItem>
      <ListItem className='text-info rounded-none'>Account</ListItem>
      <ListItem className='absolute text-info rounded-none bottom-5 text-end justify-self-center'>
        Log Out
      </ListItem>
    </List>
  );
}
