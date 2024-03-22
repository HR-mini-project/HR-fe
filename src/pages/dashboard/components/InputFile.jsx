
export default function InputFile({ text, onChange, pdf, value, disable }) {
    if(!value) value=''
    const openPDF = () => {
        if (pdf) {
            const url = URL.createObjectURL(pdf);
            const newTab = window.open("", "_blank");
            newTab.location.href = url;
            URL.revokeObjectURL(url); // Clean up after opening
        }
    };
    return (
        <div>
            <label className="ml-1">
                {text}
            </label>
            <div className="border border-dotted px-4 py-2 flex justify-between">
                <input
                    type="file"
                    value = {value}
                    onChange={(e) => {
                        onChange(e.target.files[0]);
                    }}
                    accept="application/pdf"
                    disabled={disable}
                />
                <a
                    href={pdf}
                    target="_blank"
                    className="py-1 bg-slate-400 px-4 text-black rounded-md"
                    onClick={openPDF}
                >
                    Open
                </a>
            </div>
        </div>
    );
}
