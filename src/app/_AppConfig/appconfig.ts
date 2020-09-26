export class AppConfig {
  //public readonly APIUrl = 'http://cs-schoolmanagement-api.do4u.in/';

  public readonly APIUrl = 'http://localhost:55614/';

   public readonly Token = localStorage.getItem('Token');
   
   public readonly AffiliationCreate = 'AffiliationCreate';  
   
   public readonly CreatePlayer = 'CreatePlayer';

   public readonly AffiliationMappingCreate = 'AffiliationMappingCreate';

   public readonly SchoolCreate = 'SchoolCreate';

   public readonly GradeCreate = 'GradeCreate';

   public readonly SectionCreate = 'SectionCreate';

   public readonly Subject = 'Subjectcreate';

   public readonly Announcement = 'Announcementcreate';

   public readonly Homework = 'Homeworkcreate';

   public readonly StudentCreate = 'StudentCreate';

    public readonly SchoolUpdate = 'schoolupdate';

   public readonly AffiliationUpdate = 'AffiliationUpdate';

   public readonly AffiliationMappingUpdate = 'AffiliationMappingUpdate';

   public readonly AffiliationmappingDelete = 'AffiliationMapping?';

   public readonly SectionUpdate = 'SectionUpdate';

   public readonly GradeUpdate = 'GradeUpdate';

   public readonly SubjectUpdate = 'SubjectUpdate';

   public readonly AnnouncementUpdate = 'AnnouncementUpdate';

   public readonly HomeworkUpdate = 'HomeworkUpdate';

   public readonly StudentUpdate = 'StudentUpdate';

   public readonly GetAffiliation = 'GetAffiliation?';

   public readonly GetBloodGroup = 'GetBloodGroup?';

   public readonly GetGender = 'GetGender?';

   public readonly GetStudent = 'GetStudent?';

   public readonly GetStudentMap = 'StudentAssign?';

   public readonly GetAnnouncement = 'GetAnnouncement?';

   public readonly GetHomework = 'GetHomework?';

   public readonly GetAffiliationMapping = 'GetAffiliationMapping?';

   public readonly GetGradeId = 'GetGradeId?';

   public readonly GetGrade = 'GetGrade?';

   public readonly GetAffiliationId = 'GetAffiliationId?';

   public readonly GetSection = 'GetSection?';

   public readonly GetSectionId = 'GetSectionId?';

   public readonly GetStudentId = 'GetStudentId?';

   public readonly GetSubjectId = 'GetSubjectId?';

   public readonly GetSubject = 'GetSubject?';

   public readonly GetSchool = 'GetSchool?';

   public readonly GetDistrict = 'GetDistrict?';

   public readonly GetState = 'GetState?';

   public readonly MovetoGradeSection = 'MovetoGradeSection?';

   public readonly UserLogin = 'UserLogin';

   public readonly GetSearchSchool = 'GetSearchSchool?';

   public readonly GetAffiliationMapSearch = 'GetAffiliationMapSearch?';

   public readonly GetGradeSearch = 'GetGradeSearch?';

   public readonly GetSectionSearch = 'GetSectionSearch?';

   public readonly GetSubjectSearch = 'GetSubjectSearch?';

   public readonly GetAnnouncementSearch = 'GetAnnouncementSearch?';

   public readonly GetStudentsSearch = 'GetStudentsSearch?';

   public readonly GetHomeworkSearch = 'GetHomeworkSearch?';

   //  public readonly Usercreate = 'Usercreate';

   public readonly GetUser = 'GetUser?';

   public readonly GetSearchUser = 'GetSearchUser?';

   public readonly GetRole = 'GetRole?';

   public readonly UserCreate = 'UserCreate'

   public readonly UserUpdate = 'UserUpdate';

   public readonly GetAnnouncemenTypeMaster = 'GetAnnouncemenTypeMaster?';

   public readonly LogOut = 'LogOut';

   public readonly UserForgot='UserForgot?';

   public readonly ChangePassword='ChangePassword';

   public readonly GetSchoolIndividual = 'GetSchoolIndividual?';

}