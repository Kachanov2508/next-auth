import classes from "./Navbar.module.css";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <div className={classes.navbar}>
            <div className={classes.left}>
                <div className={classes.logo}>
                    <Link href="/">NextAuth</Link>
                </div>
                <Link href="/page-from-auth">
                    PageFromAuth
                </Link>
            </div>
            <div className={classes.auth}>
                {session ? (
                    <div onClick={() => signOut()} className={classes.signout}>Выйти</div>
                ) : (
                    <Link href="/auth/signin">Авторизация</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
