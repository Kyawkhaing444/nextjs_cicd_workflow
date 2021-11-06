# Production-Grade CI/CD workflow

In this project, I have set up a front-end production-grade workflow for Nextjs [ React ] with docker for containerization, Circle ci for continuous integration and deployment, and AWS Elastic Beanstalk for the production server.

- [x] Created custom docker image for nextjs codebase and created volume binding for live updating.
- [x] Created docker-compose file for handling live updating instead of manually instructing to create volume binding in docker run command.
- [x] Set up testing environment
- [x] Set up Circle CI between local and github remote repo
- [ ] Set up Elastic Beanstalk for production server
- [ ] Set up continuous deployment with circleci between github and production server.
