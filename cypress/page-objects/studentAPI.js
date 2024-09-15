export class StudentAPI {
  getStudents() {
    return cy.request({
      method: "GET",
      url: "/api/studentsDetails",
    });
  }

  createStudent(student) {
    return cy.request({
      method: "POST",
      url: "/api/studentsDetails",
      body: student,
    });
  }

  getSpecificStudent(id) {
    if (!id) {
      throw new Error("Student ID is required");
    }

    return cy.request({
      method: "GET",
      url: `/api/studentsDetails/${id}`,
    });
  }

  createTechnicalSkills(skill) {
    return cy.request({
      method: "POST",
      url: "/api/technicalskills",
      body: skill,
    });
  }
}
