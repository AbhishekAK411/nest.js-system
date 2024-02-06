import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
export declare class ComputerController {
    private diskService;
    private cpuService;
    constructor(diskService: DiskService, cpuService: CpuService);
    run(): (string | number)[];
}
