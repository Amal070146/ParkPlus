declare module "react-qr-reader" {
  import { ComponentType } from "react";

  export interface QrReaderProps {
    // Include the expected props here
    onScan: (data: string | null) => void;
    onError?: (error: any) => void;
    // ... other props
  }

  export const QrReader: ComponentType<QrReaderProps>;
}
