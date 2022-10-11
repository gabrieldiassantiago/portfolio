import { TextFooter } from "./style"
const gab = "https://github.com/"
function Fotter () {
    return (
        <div>
            <TextFooter> Desenvolvido com ❤️ por  <br></br><a href={gab}>Gabriel</a></TextFooter>
        </div>
    )
}
export {Fotter}