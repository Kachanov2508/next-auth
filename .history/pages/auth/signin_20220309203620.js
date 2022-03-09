import { useRouter } from "next/router";
import { useEffect } from "react";

import { getProviders, getSession, useSession } from "next-auth/react";

import classes from "../../styles/SignIn.module.css";

import AuthButton from "../../components/AuthButton/AuthButton";
import { faGithub, faGoogle, faYandex } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function SignIn({ providers }) {

    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if(session) router.replace('/')
    }, [session])

    return (
        <div className={classes.container}>
            <div className={classes.buttons}>
                <AuthButton
                    provider={providers.yandex}
                    background="#F44336"
                    icon={faYandex}
                />
                <AuthButton
                    provider={providers.mailru}
                    background="#2196F3"
                    icon={faAt}
                />
                <AuthButton
                    provider={providers.github}
                    background="#121212"
                    icon={faGithub}
                />
                <AuthButton
                    provider={providers.google}
                    background="#2196F3"
                    icon={faGoogle}
                />
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
