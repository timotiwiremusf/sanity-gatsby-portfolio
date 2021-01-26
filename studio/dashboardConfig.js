export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601094d5e426f419830368ca',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gwtd7xe1',
                  apiId: '90218fbb-83fd-4c52-8a7f-04c0ff0bb6d4'
                },
                {
                  buildHookId: '601094d54e99461b92d7da9a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iw16sbiv',
                  apiId: '85321a36-fcb1-4859-ae06-5b87be703af3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timotiwiremusf/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iw16sbiv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
