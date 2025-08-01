"use client";

import EditableText from "../_components/editable-text";
import Heading from "../_components/heading";
import MainInfo from "../_components/main-info";
import OneLineItem from "../_components/oneline-item";
import SkillItem from "../_components/skill-item";
import TimelineItem from "../_components/timeline-item";
import UserPhoto from "../_components/user-photo";
import { Color, CV_WRAPPER_ID, I18N, Language } from "../constants";
import type { CvInformation } from "../types";

interface Props {
  color: Color;
  language: Language;
  cvInformation: CvInformation;
  onChangeCvInformation: (key: string, value: unknown) => void;
  onAddNew: (key: string, value: Array<unknown>) => void;
}

const ProfessionalTheme: React.FC<Props> = ({
  color,
  language,
  cvInformation,
  onChangeCvInformation,
  onAddNew,
}) => {
  return (
    <div id={CV_WRAPPER_ID}>
      <div className="flex items-center gap-4">
        <EditableText
          id="fullName"
          size="lg"
          placeholder={I18N[language].fullName}
          className="min-w-40 font-bold"
          value={cvInformation}
          onChange={onChangeCvInformation}
        />
        <div
          style={{ backgroundColor: color }}
          className="flex flex-auto justify-end p-1"
        >
          <EditableText
            id="position"
            placeholder={I18N[language].position}
            className="min-w-28"
            align="right"
            bgColor={color}
            value={cvInformation}
            onChange={onChangeCvInformation}
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="col-start-1 col-end-2">
          <UserPhoto
            url={cvInformation.photo}
            onChange={(url) => onChangeCvInformation("photo", url)}
          />
          <div
            style={{ backgroundColor: color }}
            className="grid grid-cols-1 gap-2 px-4 py-3"
          >
            <EditableText
              id="birthDate"
              size="sm"
              label={I18N[language].birthDate}
              placeholder="DD/MM/YYYY"
              className="w-full"
              bgColor={color}
              value={cvInformation}
              onChange={onChangeCvInformation}
            />
            <EditableText
              id="gender"
              size="sm"
              label={I18N[language].gender}
              placeholder={I18N[language].genderPlaceholder}
              className="w-full"
              bgColor={color}
              value={cvInformation}
              onChange={onChangeCvInformation}
            />
            <EditableText
              id="phone"
              size="sm"
              label={I18N[language].phone}
              placeholder="0123 456 789"
              className="w-full"
              bgColor={color}
              value={cvInformation}
              onChange={onChangeCvInformation}
            />
            <EditableText
              id="email"
              size="sm"
              label={I18N[language].email}
              placeholder="email@example.com"
              className="w-full"
              bgColor={color}
              value={cvInformation}
              onChange={onChangeCvInformation}
            />
            <EditableText
              id="address"
              size="sm"
              label={I18N[language].address}
              placeholder={I18N[language].addressPlaceholder}
              className="w-full"
              bgColor={color}
              value={cvInformation}
              onChange={onChangeCvInformation}
            />
            <EditableText
              id="website"
              size="sm"
              label={I18N[language].website}
              placeholder="facebook.com/username"
              className="w-full"
              bgColor={color}
              value={cvInformation}
              onChange={onChangeCvInformation}
            />
            <Heading
              label={I18N[language].skills}
              color="light"
              className="mt-4"
            />
            <div className="grid grid-cols-1 gap-2">
              {cvInformation.skills
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                  <SkillItem
                    key={item.id}
                    id={item.id}
                    placeholder={I18N[language].skillPlaceholder}
                    bgColor={color}
                    value={cvInformation}
                    onChange={onChangeCvInformation}
                    onChangeList={(skills) => onAddNew("skills", skills)}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-4">
          <MainInfo label={I18N[language].jobGoal} color={color}>
            <EditableText
              id="jobGoal"
              size="sm"
              placeholder={I18N[language].jobGoalPlaceholder}
              className="w-full"
              value={cvInformation}
              onChange={onChangeCvInformation}
            />
          </MainInfo>
          <MainInfo label={I18N[language].experiences} color={color}>
            {cvInformation.experiences
              .sort((a, b) => a.order - b.order)
              .map((value) => (
                <TimelineItem
                  key={value.id}
                  id={value.id}
                  type="experiences"
                  language={language}
                  value={cvInformation}
                  onChange={onChangeCvInformation}
                  onChangeList={(experiences) =>
                    onAddNew("experiences", experiences)
                  }
                />
              ))}
          </MainInfo>
          <MainInfo label={I18N[language].educations} color={color}>
            {cvInformation.educations
              .sort((a, b) => a.order - b.order)
              .map((value) => (
                <TimelineItem
                  key={value.id}
                  id={value.id}
                  type="educations"
                  language={language}
                  value={cvInformation}
                  onChange={onChangeCvInformation}
                  onChangeList={(educations) =>
                    onAddNew("educations", educations)
                  }
                />
              ))}
          </MainInfo>
          <MainInfo label={I18N[language].rewards} color={color}>
            {cvInformation.rewards
              .sort((a, b) => a.order - b.order)
              .map((value) => (
                <OneLineItem
                  key={value.id}
                  id={value.id}
                  name="rewards"
                  language={language}
                  placeholder={I18N[language].rewardPlaceholder}
                  value={cvInformation}
                  onChange={onChangeCvInformation}
                  onChangeList={(rewards) => onAddNew("rewards", rewards)}
                />
              ))}
          </MainInfo>
          <MainInfo label={I18N[language].certificates} color={color}>
            {cvInformation.certificates
              .sort((a, b) => a.order - b.order)
              .map((value) => (
                <OneLineItem
                  key={value.id}
                  id={value.id}
                  name="certificates"
                  language={language}
                  placeholder={I18N[language].certificatePlaceholder}
                  value={cvInformation}
                  onChange={onChangeCvInformation}
                  onChangeList={(certificates) =>
                    onAddNew("certificates", certificates)
                  }
                />
              ))}
          </MainInfo>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTheme;
