export const months=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'] as const;
export type MonthValues=number[];
export type Scenario='Фактический год'|'Среднемноголетний год'|'50% обеспеченности'|'75% обеспеченности'|'95% обеспеченности'|'Пользовательский сценарий';
export type RowKind='inflow'|'outflow';
export type CheckStatus='Не проверено'|'Проверено'|'Ошибка'|'Предупреждение';
export interface Basin{ id:string; name:string; }
export interface Vhu{ id:string; basinId:string; code:string; name:string; upstreamId?:string; downstreamId?:string; inputSection:string; closingSection:string; hasReservoirs:boolean; order:number; }
export interface BalanceRow{ id:string; kind:RowKind; code:string; name:string; values:MonthValues; unit:'млн м³'|'м³/с'; source:string; status:CheckStatus; note:string; priority?:number; actualSupply?:MonthValues; }
export interface Reservoir{ id:string; basinId:string; vhuId:string; name:string; fullVolume:number; usefulVolume:number; deadVolume:number; minVolume:number; maxVolume:number; start:number[]; inflow:number[]; withdrawal:number[]; release:number[]; evaporation:number[]; filtration:number[]; end?:number[]; warnings?:string[]; }
export interface Calculation{ id:string; title:string; basinId:string; year:number; scenario:Scenario; status:'Черновик'|'Рассчитан'|'Есть ошибки'; updatedAt:string; rows:BalanceRow[]; reservoirs:Reservoir[]; selectedVhuId:string; }
export interface MonthResult{month:string;inflow:number;outflow:number;balance:number;freeFlow:number;deficit:number;accountedOutflow:number;residualFlow:number;mismatch:number;provision:number;}
export interface CalculationResult{monthly:MonthResult[];annual:Omit<MonthResult,'month'>; downstreamTransfer:number[]; warnings:string[];}
export interface ValidationIssue{level:'error'|'warning'; message:string; target?:string;}
