import type { NextApiRequest, NextApiResponse } from 'next';
import listTables from '../../aws/orchestrator/timestream/listTables';
import { MonitoredService, VectorService } from '../../constants/frontendTypes';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const tables = await listTables();
    console.log('====================================');
    console.log(tables);
    console.log('====================================');

    const data: MonitoredService[] = [];
    tables.forEach((table: { TableName: VectorService }) => {
      data.push({ name: table.TableName });
    });

    res.status(200).json({ data });
  } catch (e) {
    console.log(e);
    res.status(500).json({ data: [] });
  }
};
