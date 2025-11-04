import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "@/components/icons";
import { IntlayerNode } from "next-intlayer";
import { FC } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { clsx } from "clsx";
import Image from "next/image";

interface Props {
  text: IntlayerNode<string>;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

const LicenseModal: FC<Props> = ({ text, variant }) => {
  const matches = useMediaQuery("(max-width: 576px)");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size="lg"
          className={clsx({ "mt-3 w-full text-xs": matches })}
        >
          {text}
          <ArrowRight className="w-4 h-auto" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] w-full">
        <DialogTitle></DialogTitle>
        <Image src="/license.pnf" width={500} height={500} alt=".." />
      </DialogContent>
    </Dialog>
  );
};

export default LicenseModal;
