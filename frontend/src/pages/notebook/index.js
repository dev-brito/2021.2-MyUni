import Layout from "../../components/layout";
import SearchInput from "../../components/searchInput";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.scss";

function Notebook() {
    const notebookTopic = [
        {
            title: "Anotações da aula",
            description: "Conteúdo de Calculo 1 do dia 27/07/2019",
            label: "Calculo 1",
        },
        {
            title: "Anotações da aula",
            description: "Conteúdo de DIAC do dia 27/07/2019",
            label: "DIAC",
        },
        {
            title: "Anotações da aula",
            description: "Conteúdo de Calculo 1 do dia 27/07/2019",
            label: "Calculo 1",
        },
        {
            title: "Anotações da aula",
            description: "Conteúdo de DIAC do dia 27/07/2019",
            label: "DIAC",
        },
    ];
    return (
        <Layout>
            <div id="notebook" className="notebook">
                <div className="notebook_content">
                    <SearchInput />
                    {notebookTopic.map((topic) => {
                        return (
                            <article className="notebook_article">
                                <div className="notebook_article_content-top">
                                    
                                    <h1>{topic.title}</h1>
                                    <h2>{topic.description}</h2>
                                </div>
                                <div className="notebook_article_content-bottom">
                                    <div className="notebook_article_content-bottom_label">
                                        <h4>{topic.label}</h4>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <div className="notebook_aside">
                    <form className="notebook_aside_form">
                        <h3>Adicionar um notebook</h3>
                        <Input
                        name="titulo"
                        type="text"
                        title="Titulo:"
                        placeholder="titulo"
                        />
                        <Input
                        name="descrição"
                        type="text"
                        title="Descrição:"
                        placeholder="descrição"
                        />
                        <Input
                        name="topico"
                        type="text"
                        title="Tópico:"
                        placeholder="topico"
                        />
                        <div className="notebook_aside_form_button"><Button label="Adicionar" /></div>
                    </form>
                    <aside className="notebook_aside_sidebar">
                        <h3>Tópicos</h3>
                        {notebookTopic.map((topic) => {
                            return (
                                <ul>
                                    <li><a href="">{topic.label}</a></li>
                                </ul>
                            );
                        })}
                    </aside>
                </div>
                <a className="back-to-top" href="#notebook">➜</a>
            </div>
        </Layout>
    );
}
export default Notebook;
