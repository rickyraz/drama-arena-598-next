import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function Login() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex justify-center pt-4">
        <Image
          src="/logo/logo-vertical.webp"
          alt={"Logo DA Vertical"}
          width={275}
          height={298}
        />
      </div>
      <div>
        <div className="flex justify-center">
          <div className="grid w-full max-w-[287px] items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Button
              variant="outline"
              className="h-12 text-sm border-[#CDFFEA] border-2"
            >
              <Image
                src="/g_icon.svg"
                alt="Google Logo"
                width={25}
                height={25}
              />
              <span className="pl-2 text-[#15563A]">Masuk dengan Google</span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <div className="grid w-full max-w-[287px] items-center gap-2">
            <Label>Posisi/Peranan</Label>
            <Select>
              <SelectTrigger className="w-[287px] h-12 border-[#CDFFEA] border-2 text-[#15563A]">
                <SelectValue placeholder="Peranan saat ini" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="wali santri">Wali Santri</SelectItem>
                  <SelectItem value="masyarakat">Masyarakat</SelectItem>
                  <SelectItem value="ustadz">Ustadz</SelectItem>
                  <SelectItem value="ustadzah">Ustadzah</SelectItem>
                  <SelectItem value="lainnya">Lainnya</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="grid w-full max-w-[287px] items-center gap-2">
            <Button
              type="submit"
              variant="default"
              className="h-12 text-sm bg-[#0FA383] hover:bg-[#0b8066]"
            >
              <span className="pl-1 text-white">Masuk</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-6">
        <p>Masuk Aplikasi untuk memberikan vote</p>
      </div>
    </div>
  );
}

export default Login;
