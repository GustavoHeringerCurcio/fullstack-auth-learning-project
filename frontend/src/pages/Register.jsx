import RegisterCard from "@/features/auth/RegisterCard"
import MetaHead from "@/components/layout/MetaHead"

export default function Register() {
    return (
        <>
        <MetaHead pageKey="register" />
        <RegisterCard></RegisterCard>
        </>
    )
}