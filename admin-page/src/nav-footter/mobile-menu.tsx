'use client'
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Search from './search';
import styles from './mobil.module.css'; // Import the CSS module

export default function MobileMenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className={`${styles.openMobileMenuBtn} md:hidden`}
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className={styles.transitionOverlay}>
          <Transition.Child
            as={Fragment}
            enter={`${styles.transitionOverlay} transition-all ease-in-out duration-300`}
            enterFrom={`${styles.transitionOverlay} opacity-0 backdrop-blur-none`}
            enterTo={`${styles.transitionOverlay} opacity-100 backdrop-blur-[.5px]`}
            leave={`${styles.transitionOverlay} transition-all ease-in-out duration-200`}
            leaveFrom={`${styles.transitionOverlay} opacity-100 backdrop-blur-[.5px]`}
            leaveTo={`${styles.transitionOverlay} opacity-0 backdrop-blur-none`}
          >
            <div aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter={`${styles.mobileMenuPanel} transition-all ease-in-out duration-300`}
            enterFrom={`${styles.mobileMenuPanel} translate-x-[-100%]`}
            enterTo={`${styles.mobileMenuPanel} translate-x-0`}
            leave={`${styles.mobileMenuPanel} transition-all ease-in-out duration-200`}
            leaveFrom={`${styles.mobileMenuPanel} translate-x-0`}
            leaveTo={`${styles.mobileMenuPanel} translate-x-[-100%]`}
          >
            <Dialog.Panel className={styles.mobileMenuPanel}>
              <div className="p-4">
                <button
                  className={`${styles.closeMobileMenuBtn}`}
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className="mb-4 w-full">
                  <Search />
                </div>
            
                  <ul className={`${styles.menuList}`}>
                    
                      <li
                        className={`${styles.menuItem}`}
                      >
                        <Link href='/' onClick={closeMobileMenu}>
                          hh
                        </Link>
                      </li>
           
                  </ul>
           
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
