export default function Sidebar({ children }) {
    return (
        <>
            {children}
        </>
    );
}

function SidebarButton({imgPath, children, onClick}) {
    return (
        <>
            <div className="flex border p-2">
                <div className="w-[48px]  my-auto flex">
                    <img src={imgPath}  className="w-full object-fill" />
                </div>
                <button className="w-full h-full" onClick={onClick}>{children}</button>
            </div>
        </>
    );
}

Sidebar.SidebarButton = SidebarButton
