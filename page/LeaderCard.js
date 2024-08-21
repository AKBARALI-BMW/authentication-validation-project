import LeaderCard from "./LeaderCard";

function Users() {
    const [users, setUsers] = useState([]);

    async function getAllUsers() {
        try {
            const userResponse = await fetch("https://api.github.com/users");
            const responseData = await userResponse.json();
            console.log(responseData);
            setUsers(responseData);
        } catch (err) {
            console.log("API link is not correct, try again", err);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="dashboard">
            <h1>Welcome to Users page...</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", width: "100%" }}>
                {users.length > 0 ? (
                    users.map(user => (
                        <LeaderCard
                            key={user.id}
                            name={user.login}
                            avatar_url={user.avatar_url}
                            point={user.type}
                            id ={user.id}
                        />
                    ))
                ) : (
                    <p>Loading users...</p>
                )}
            </div>
        </div>
    );
}

export default Users;
