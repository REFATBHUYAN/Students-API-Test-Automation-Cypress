import { StudentAPI } from "../../page-objects/studentAPI";

describe("Student API Tests", () => {
  const studentAPI = new StudentAPI();
  let studentId; // Declare a variable to store studentId

  it("Get Student - Validate Status Code", () => {
    studentAPI.getStudents().then((response) => {
      expect(response.status).to.eq(200);
      cy.allure().step("Checked Status Code 200");
    });
  });

  it("Get Student - Validate Response Length", () => {
    studentAPI.getStudents().then((response) => {
      expect(response.body.length).to.be.greaterThan(0);
      cy.allure().step("Validated the length of response");
    });
  });

  it("Create Student - Validate Status Code and Store ID", () => {
    const student = {
      first_name: "John",
      middle_name: "Doe",
      last_name: "Smith",
      date_of_birth: "1995-12-23",
    };

    studentAPI.createStudent(student).then((response) => {
      expect(response.status).to.eq(201);
      studentId = response.body.id; // Store studentId from the response
      console.log("student created with ID:", studentId); // Confirm the ID is stored
      cy.allure().step("Created a new student and checked status code 201");
    });
  });

  it("Get Specific Student - Validate Field Values", () => {
    // Use the stored studentId from the previous test
    cy.wrap(studentId)
      .should("exist")
      .then((id) => {
        // Ensure studentId is available
        studentAPI.getSpecificStudent(id).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.have.property("id", id);
          expect(response.body.data).to.have.property("first_name", "John");
          expect(response.body.data).to.have.property("middle_name", "Doe");
          expect(response.body.data).to.have.property("last_name", "Smith");
          expect(response.body.data).to.have.property(
            "date_of_birth",
            "1995-12-23"
          );
          cy.allure().step("Validated specific student field values");
        });
      });
  });

  it("Create Technical Skills - Validate Status Code", () => {
    // Use the stored studentId when creating technical skills
    cy.wrap(studentId)
      .should("exist")
      .then((id) => {
        // Ensure studentId is available
        const skills = {
          id: 1,
          language: ["JavaScript", "Python"],
          yearexp: "2",
          lastused: "2023",
          st_id: id, // Use stored studentId
        };

        studentAPI.createTechnicalSkills(skills).then((response) => {
          expect(response.status).to.eq(200);
          cy.allure().step(
            "Created technical skills and checked status code 200"
          );
        });
      });
  });
});
