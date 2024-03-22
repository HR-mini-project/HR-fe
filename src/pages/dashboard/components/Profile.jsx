
export function Profile({name,email,position,departemen,img}) {
    return (
        <>
            <div className="flex gap-x-5">
                <div className="w-24">
                    <img src={img} className="rounded-xl" />
                </div>

                <div>
                    <span className="font-bold">{ name }</span>
                    <p className="text-xs text-opacity-70">{email}</p>
                    <span className="font-bold text-opacity-20">{ departemen }</span>
                    <p className="text-xs text-opacity-70">{ position }</p>
                </div>
            </div>
        </>
    );
}
