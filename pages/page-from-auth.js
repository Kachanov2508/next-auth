import { useSession } from "next-auth/react";
import Link from "next/link";

const PageFromAuth = () => {
    const { data: session } = useSession();

    return (
        <div>
            {session ? (
                <p>Страница для авторизованных пользователей</p>
            ) : (
                <p>
                    Для просмотра страницы необходимо пройти{" "}
                    <span style={{ color: "blue" }}>
                        {<Link href="/auth/signin">авторизацию</Link>}
                    </span>
                </p>
            )}
        </div>
    );
};

export default PageFromAuth;
