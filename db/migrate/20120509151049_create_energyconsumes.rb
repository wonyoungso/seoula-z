class CreateEnergyconsumes < ActiveRecord::Migration
  def change
    create_table :energyconsumes do |t|
      t.integer :dong_code
      t.string :dong_name
      t.float :energy_2007
      t.float :energy_2008
      t.timestamps
    end
  end
end


data.each do |d|
  dong = Dong.find_by_name(d["ADM_DR_NM"].gsub(/*능*/, "릉"))
  if dong.present?
    e = Energyconsume.new
    e.dong_code = dong.dong_code 
    e.dong_name = dong.dong_name
    e.energy_2007 = d["GWH_07"]
    e.energy_2008 = d["GWH_08"]
    e.save
  end
 end

 data.map {|d|
   dong = Dong.find_by_name(d["ADM_DR_NM"])
   if !dong.present?
     d["ADM_DR_NM"]
   end
 }



data.each do |d|
  dong = Dong.find_by_name(d["ADM_DR_NM"])
  if !dong.present?
    e = Energyconsume.new
    e.dong_code = d["ADM_DR_CD"]
    e.dong_name = d["ADM_DR_NM"]
    e.energy_2007 = d["GWH_07"]
    e.energy_2008 = d["GWH_08"]
    e.save
  end
 end