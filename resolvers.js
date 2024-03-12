const Students  = require('../model/studentsModel');

const resolvers = {
  Query: {
    students: async () => {
      // Fetch students from the database
      return await Students.findAll();
    },
    studentsByClass: async (_, { className }) => {
      // Fetch students by class name from the database
      return await Students.findAll({ where: { className: className } });
    },
  },
  Mutation: {
      addStudent: async (_, { name, className, phno, address }) => {
          try {
              
              console.log(name);
        
              // Create a new student in the database
              const newStudent = await Students.create({ name, className, phno, address });
              console.log(newStudent.data);
        
              return newStudent;
          } catch (error) {
              throw new Error('Could not add student: ' + error.message);
          }
      },
    updateStudent: async (_, { id, name, className, phno, address }) => {
      // Update an existing student in the database
      const student = await Students.findByPk(id);
      if (!student) {
        throw new Error('Student not found');
      }

      await student.update({ name, className, phno, address });
      return student;
    },
    deleteStudent: async (_, { id }) => {
      // Delete a student from the database
      const student = await Students.findByPk(id);
      if (!student) {
        throw new Error('Student not found');
      }

      await student.destroy();
      return id;
    },
  },
};

module.exports = resolvers;
