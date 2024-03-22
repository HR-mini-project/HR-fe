
export default function InputSelect({ onChange, value, label, type, listName, centerLabel, disable }) {
    const style = centerLabel ? 'justify-center' : null 
    if (!type) type = "text";
    return (
        <>
            <label className="form-control w-full max-w-xs">
                <div className={ `label flex ${style}` }>
                    <span className="label-text ">{label}</span>
                </div>
                <input
                    list={label}
                    type={type}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={onChange}
                    disabled={disable}
                    value={value}
                />
                <datalist id={label}>
                    {listName.map((name,id) => (
                        <option value={name} key={name+id}/>
                    ))}
                </datalist>
            </label>
        </>
    );
}
