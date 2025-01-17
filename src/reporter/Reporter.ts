import { FilesChange } from './FilesChange';
import { Report } from './Report';

interface Reporter {
  getReport(change: FilesChange, watching: boolean): Promise<Report>;
}

export { Reporter };
