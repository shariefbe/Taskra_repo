
import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <h1 className="text-xl font-bold text-blue-700">Taskra</h1>
          </Link>
          
          <NavigationMenu className="z-50">
            <NavigationMenuList className="flex space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[state=open]:bg-gray-100">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-50 bg-white shadow-lg border border-gray-200">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/#features" title="Smart Reminders">
                      Get notified before deadlines with customizable alert timings.
                    </ListItem>
                    <ListItem href="/#features" title="Team Collaboration">
                      Invite team members and assign compliance tasks.
                    </ListItem>
                    <ListItem href="/#features" title="Document Storage">
                      Upload and store compliance documents securely.
                    </ListItem>
                    <ListItem href="/#features" title="All Features">
                      Explore all the features Taskra has to offer.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[state=open]:bg-gray-100">
                  Pricing
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-50 bg-white shadow-lg border border-gray-200">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                    <ListItem href="/#pricing" title="Free">
                      Perfect for individuals just getting started.
                    </ListItem>
                    <ListItem href="/#pricing" title="Pro">
                      For small businesses and teams.
                    </ListItem>
                    <ListItem href="/#pricing" title="Consultant">
                      For professionals managing multiple clients.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/dashboard" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                )}>
                  Dashboard
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
