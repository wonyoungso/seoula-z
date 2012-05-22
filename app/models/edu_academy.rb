class EduAcademy < ActiveRecord::Base
  belongs_to :borough
  def cont_to_json
    {
      :id => self.id,
      :borough_id => self.borough_id,
      :school_bosup => self.school_bosup,
      :school_international => self.school_international,
      :school_art => self.school_art,
      :school_special => self.school_special,
      :school_etc => self.school_etc,
      :work_tech => self.work_tech,
      :work_international => self.work_international,
      :work_liberal => self.work_liberal,
      :work_craft => self.work_craft,
      :readingroom => self.readingroom
    }
  end
end
