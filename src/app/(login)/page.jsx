import LoginPanel from "@/components/LoginPanel"


export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleLoginDataSubmit = async (e) => {
    e.preventDefault()
    if (!username || !password)
      return;
    const redirectUrl = await login(username, password);
    if (redirectUrl) {
      router.push(redirectUrl);
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-800">
          <LoginPanel />
      </div>
    </>
  );
}