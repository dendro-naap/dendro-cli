import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import TrafficList from "../components/traffic";
import ServicesList from "../components/Services/List";
import LogTable from '../components/LogTable/Table';

export default function Home() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    (async () => {
      // const res = await fetch('http://localhost:3000/api/logs');
      // const { logs: fetchedLogs } = await res.json();

      const fetchedLogs: any = [
        {
          TIME: 1618341535723,
          message: '2021-04-13T19:18:55.723Z\tundefined\tINFO\tLoading function\n',
          ingestionTime: 1618341544834
        }
      ];

      setLogs(fetchedLogs);
    })();
  }, []);

  return (
    <div className="App h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">

        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
            Performance Snapshot
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <TrafficList />
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
            Monitored Services
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <ServicesList />
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Activity Log</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <LogTable logs={logs} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
