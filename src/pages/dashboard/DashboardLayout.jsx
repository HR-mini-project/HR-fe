import Sidebar from "./components/Sidebar";
import { CONTENT } from "./constant";
import useContentContext from "./hooks/useContent";

export default function DashboardLayout({ children }) {
    const { setContent } = useContentContext();
    return (
        <>
            <div className="flex w-screen h-screen ">
                    <aside className="w-2/12  flex flex-col h-svh justify-center gap-y-8 p-2 bg-[#27374D] rounded-r-lg">
                        <Sidebar>
                            <Sidebar.SidebarButton
                                onClick={() => setContent(CONTENT.HOME)}
                                imgPath={"./src/assets/home.png"}
                            >
                                Home
                            </Sidebar.SidebarButton>
                            <Sidebar.SidebarButton
                                onClick={() => setContent(CONTENT.EMPLOYEE_DATA)}
                                imgPath={"./src/assets/employee_data.png"}
                            >
                                Data Employee
                            </Sidebar.SidebarButton>
                            <Sidebar.SidebarButton
                                onClick={() => setContent(CONTENT.ATTENDANCE)}
                                imgPath={"./src/assets/attendance.webp"}
                            >
                                Attendance
                            </Sidebar.SidebarButton>
                            <Sidebar.SidebarButton
                                onClick={() => setContent(CONTENT.ATTENDANCE_APPROVAL)}
                                imgPath={"./src/assets/attendance_approval.png"}
                            >
                                Attendance Approval
                            </Sidebar.SidebarButton>
                            <Sidebar.SidebarButton
                                onClick={() => setContent(CONTENT.TEST)}
                                imgPath={"./src/assets/attendance_approval.png"}
                            >
                                TEST
                            </Sidebar.SidebarButton>
                        </Sidebar>
                    </aside>
                <div className="flex-1 h-screen w-full overflow-y-scroll py-5">
                    <main className="w-full">{children}</main>
                </div>
            </div>
        </>
    );
}
