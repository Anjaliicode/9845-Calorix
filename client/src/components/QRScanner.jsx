/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router";

function QRScanner() {
    const [data, setData] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        navigate(data);
    }, [data]);

    return (
        <div className="w-[400px] absolute left-1/2 -translate-x-1/2">
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (result) {
                        setData(result.text);
                    }
                }}
            />
        </div>
    );
}

export default QRScanner;
