
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';



Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSaN6LfP-RPQo6ltGN6yH81jYC0lWLEKrFstXwinGDFMGC9d0TcrKkEnE8_thET61a-AjgUtEZPHhQp/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQPGQ-Pe0oiVgj2zOp4dvY9iTV8oZbIvn03tfHqV3PycHQgTXtR9w6Grv2Wn2oqP1xwddAf-w9aiqoz/pub?output=csv")
      ])
      .then(([about, projects]) => {
        const data = {about, projects};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.id===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
    }    
});



