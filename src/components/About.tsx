function calcAge(date:string) {
    const today = new Date();
    const birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function calcXp(date:number) {
    const today = new Date();
    let years = today.getFullYear() - date;
    return years;
}

function About() {
  return (
    <div id="aboutcontent" className="flex flex-col w-full items-center justify-between px-8 xl:px-14 py-7 bg-gray-300 dark:bg-gray-800 sm:rounded-md transition-all">
        <p className="text-2xl text-red-500 dark:text-red-400 font-bold mb-5">
            Sobre mim
        </p>
        <div className="flex flex-row justify-between">
            <span className="flex flex-col space-y-3 items-center text-xl w-full">
                <p>
                    Eu sou o Gilberto Junio, tenho {calcAge('1999-09-11')} anos e sou aficionado por música, carros e tecnologia. Trabalho como desenvolvedor frontend a {calcXp(2020)} anos, começando com AngularJS e atualmente trabalho principalmente com React, mas tenho experiência com mais algumas tecnologias com projetos em produção.
                </p>
                <p>
                    Gosto de sempre me atualizar com novas tecnologias, tenho facilidade em aprender novas linguagens usando a internet e aplicando em projetos práticos. Além dos desafios técnicos, também busco me desenvolver mais na área de gestão de equipes. Acredito que um bom desenvolvedor não apenas cria código de qualidade, mas também colabora efetivamente com seu time, compartilhando conhecimentos e ajudando a criar um ambiente de trabalho produtivo.
                </p>
            </span>
        </div>
    </div>
  )
}

export default About