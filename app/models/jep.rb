class Jep < ApplicationRecord
    validates :topic, presence: true
  validates :question, presence: true
  validates :answer, presence: true
  validates :point, numericality: { only_integer: true }, allow_blank: false
end
