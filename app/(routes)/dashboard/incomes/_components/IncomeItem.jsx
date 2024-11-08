import formatNumber from "@/utils";
import Link from "next/link";
import React from "react";
import { Trash2 } from "lucide-react";

function IncomeItem({ budget, onDelete }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };
  
  return (
    <div
      className="p-5 border rounded-2xl
    hover:shadow-md cursor-pointer h-[170px] relative"
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onDelete(budget.id);
        }}
        className="absolute top-2 right-2 p-2 hover:bg-red-100 rounded-full"
      >
        <Trash2 className="w-4 h-4 text-red-500" />
      </button>

      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className="text-2xl p-3 px-4
              bg-slate-100 rounded-full 
              "
          >
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.name}</h2>
            <h2 className="text-sm text-gray-500">{budget.totalItem} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-lg">
          Rp {formatNumber(budget.amount)}
        </h2>
      </div>
    </div>
  );
}

export default IncomeItem;