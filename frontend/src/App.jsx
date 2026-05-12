import FloatingShape from "./components/FloatingShape"
import { Route, Routes } from "react-router-dom"

import SignUpPage from "./Pages/SignUpPage"
import LoginPage from "./Pages/LoginPage"
import EmailVerificationPage from "./Pages/EmailVerificationPage"

import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/authStore"
import { useEffect } from "react"

function App() {
  // const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // console.log("isAuthenticated", isAuthenticated)
  // console.log("user", user)

  return (
    <div
      className="min h-screen bg-gradient-to-br
      from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
      <FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
      <FloatingShape color='bg-green-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />
      <Routes>
        <Route path="/" element={"Home"}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/verify-email" element={<EmailVerificationPage />}></Route>
      </Routes>
      <Toaster />
    </div >
  )
}

export default App
