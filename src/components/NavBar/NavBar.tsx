import React from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '@material-tailwind/react'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
  NewspaperIcon,
  LightBulbIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import { ProfileMenu } from './ProfileMenu'
import { useLocation } from 'react-router-dom'

const colors: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-500',
  orange: 'bg-orange-50 text-orange-500',
  green: 'bg-green-50 text-green-500',
  'blue-gray': 'bg-blue-gray-50 text-blue-gray-500',
  purple: 'bg-purple-50 text-purple-500',
  teal: 'bg-teal-50 text-teal-500',
  cyan: 'bg-cyan-50 text-cyan-500',
  pink: 'bg-pink-50 text-pink-500'
}

const navListMenuItems = [
  {
    color: 'blue',
    icon: FlagIcon,
    title: 'About us',
    description: 'Learn about our story and our mission statement.'
  },
  {
    color: 'orange',
    icon: ChatBubbleOvalLeftIcon,
    title: 'Press',
    description: 'News and writings, press releases, and resources'
  },
  {
    color: 'green',
    icon: UsersIcon,
    title: 'Careers',
    description: 'We are always looking for talented people. Join us!'
  },
  {
    color: 'blue-gray',
    icon: FolderIcon,
    title: 'Legal',
    description: 'All the stuff that we dan from legal made us add.'
  },
  {
    color: 'purple',
    icon: RocketLaunchIcon,
    title: 'Products',
    description: 'Checkout our products that helps a startup running.'
  },
  {
    color: 'teal',
    icon: FaceSmileIcon,
    title: 'Icons',
    description: 'Set of beautiful icons that you can use in your project.'
  },
  {
    color: 'cyan',
    icon: PuzzlePieceIcon,
    title: 'UI Kits',
    description: 'High quality UI Kits helps you to 2x faster.'
  },
  {
    color: 'pink',
    icon: GiftIcon,
    title: 'Open Source',
    description: "List of all our open-source projects, it's all free."
  }
]

export function NavListMenu (): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const renderItems = navListMenuItems.map(({ icon, title, color }, key) => (
    <a href='#' key={key}>
      <MenuItem className='flex items-center gap-3 rounded-lg'>
        <div className={`rounded-lg p-5 ${colors[color]}`}>
          {React.createElement(icon, {
            strokeWidth: 2,
            className: 'h-6 w-6'
          })}
        </div>
        <div>
          <Typography
            variant='h6'
            color='blue-gray'
            className='flex items-center text-sm'
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ))

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography as='div' variant='small' className='font-normal'>
            <ListItem
              className='flex items-center gap-2 py-2 pr-4'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={ () => { setIsMobileMenuOpen((cur) => !cur) } }
            >
              <LightBulbIcon className='h-[18px] w-[18px]' />
              Topics
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
          <ul className='grid grid-cols-4 gap-y-2'>{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

interface NavListProps {
  isLoggedIn: boolean
  openNav: boolean
}
function NavList ({ isLoggedIn, openNav }: NavListProps): JSX.Element {
  const location = useLocation()
  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
      <Typography
        as='a'
        href='/feed'
        variant='small'
        color='blue-gray'
        className='font-normal'
      >
        <ListItem
          className='flex items-center gap-2 py-2 pr-4'
          selected={location.pathname === '/feed'}
        >
          <NewspaperIcon className='h-[18px] w-[18px]' />
          Feed
        </ListItem>
      </Typography>
      <NavListMenu />
      {isLoggedIn && openNav && (
        <Typography
          as='a'
          href='/account'
          variant='small'
          color='blue-gray'
          className='font-normal'
        >
          <ListItem
            className='flex items-center gap-2 py-2 pr-4'
            selected={location.pathname === '/account'}
          >
            <UserCircleIcon className='h-[18px] w-[18px]' />
            Account
          </ListItem>
        </Typography>
      )}
    </List>
  )
}

export default function NavBar (): JSX.Element {
  const [isLoggedIn] = React.useState(true) // TODO: Will need to change this later;
  // ^ probably need this state to extend to all pages of the app and rely on backend data
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        window.innerWidth >= 960 && setOpenNav(false)
      }
    )
  }, [])

  return (
    <Navbar className='mx-auto  px-8 py-2' fullWidth={true} color='transparent'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='/'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5 lg:ml-2'
        >
          LOGO
        </Typography>
        <div className='hidden lg:block'>
          <NavList isLoggedIn={isLoggedIn} openNav={openNav} />
        </div>
        <div className='hidden gap-2 lg:flex'>
          {/* {isLoggedIn ? (
            <ProfileMenu />
          ) : (
            <div>
              <Button variant='text' size='sm' color='blue-gray'>
                Sign In
              </Button>
              <Button variant='gradient' size='sm'>
                Sign Up
              </Button>
            </div>
          )} */}
          {isLoggedIn ? (
            <ProfileMenu />
          ) : (
            <div>
              <Button variant='text' size='sm' color='blue-gray'>
                Sign In
              </Button>
              <Button variant='gradient' size='sm'>
                Sign Up
              </Button>
            </div>
          )}
        </div>
        <IconButton
          variant='text'
          color='blue-gray'
          className='lg:hidden'
          onClick={() => {
            setOpenNav(!openNav)
          }}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList isLoggedIn={isLoggedIn} openNav={openNav} />
        <div className='flex w-full flex-nowrap items-center gap-2 lg:hidden'>
          {!isLoggedIn && (
            <>
              <Button variant='outlined' size='sm' color='blue-gray' fullWidth>
                Sign In
              </Button>
              <Button variant='gradient' size='sm' fullWidth>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </Collapse>
    </Navbar>
  )
}
