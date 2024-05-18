import React from 'react';
import Head from 'next/head';

const DocsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <Head>
        <title>Databayt Technical Record Document</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Databayt</h1>
      <h2 className="text-2xl mb-4">Technical Record Document</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#architecture-overview">Architecture Overview</a></li>
            <li><a href="#technologies-used">Technologies Used</a></li>
            <li><a href="#project-structure">Project Structure</a></li>
            <li><a href="#database-schema">Database Schema</a></li>
            <li><a href="#api-endpoints">API Endpoints</a></li>
            <li><a href="#middleware">Middleware</a></li>
            <li><a href="#frontend">Frontend</a></li>
            <li><a href="#component-structure">Component Structure</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="space-y-2">
            <li><a href="#routing">Routing</a></li>
            <li><a href="#state-management">State Management</a></li>
            <li><a href="#authentication-and-authorization">Authentication and Authorization</a></li>
            <li><a href="#deployment">Deployment</a></li>
            <li><a href="#ci-cd">Continuous Integration/Continuous Deployment (CI/CD)</a></li>
            <li><a href="#monitoring-and-logging">Monitoring and Logging</a></li>
            <li><a href="#future-improvements">Future Improvements</a></li>
            <li><a href="#references">References</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-3/4">
        {/* Your details sections go here */}
      </div>
    </div>
  );
};

export default DocsPage;